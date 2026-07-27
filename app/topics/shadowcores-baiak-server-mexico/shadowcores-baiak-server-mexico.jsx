import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-mexico');
}

export default function ShadowcoresBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-mexico" />;
}
