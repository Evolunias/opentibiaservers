import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-canada');
}

export default function ThaisotPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-canada" />;
}
