import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-usa');
}

export default function ShadowcoresBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-usa" />;
}
