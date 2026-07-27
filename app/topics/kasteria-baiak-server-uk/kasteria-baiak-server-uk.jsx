import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-uk');
}

export default function KasteriaBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-uk" />;
}
