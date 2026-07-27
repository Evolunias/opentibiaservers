import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-mexico');
}

export default function AlasteraBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-mexico" />;
}
