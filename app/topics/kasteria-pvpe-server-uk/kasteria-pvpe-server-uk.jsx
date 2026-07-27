import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-uk');
}

export default function KasteriaPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-uk" />;
}
