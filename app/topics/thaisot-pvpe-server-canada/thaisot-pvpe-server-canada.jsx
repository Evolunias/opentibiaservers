import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-canada');
}

export default function ThaisotPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-canada" />;
}
