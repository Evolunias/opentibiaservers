import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-uk');
}

export default function ThaisotPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-uk" />;
}
