import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-mexico');
}

export default function KasteriaBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-mexico" />;
}
