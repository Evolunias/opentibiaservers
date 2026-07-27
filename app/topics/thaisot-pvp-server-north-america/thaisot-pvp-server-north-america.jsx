import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-north-america');
}

export default function ThaisotPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-north-america" />;
}
