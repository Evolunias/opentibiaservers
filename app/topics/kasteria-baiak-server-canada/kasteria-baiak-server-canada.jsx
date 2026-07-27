import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-canada');
}

export default function KasteriaBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-canada" />;
}
