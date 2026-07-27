import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-argentina');
}

export default function ShadowcoresBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-argentina" />;
}
