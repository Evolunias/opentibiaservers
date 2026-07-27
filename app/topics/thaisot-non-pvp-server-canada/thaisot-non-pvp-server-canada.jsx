import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-non-pvp-server-canada');
}

export default function ThaisotNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-non-pvp-server-canada" />;
}
