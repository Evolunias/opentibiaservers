import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-north-america');
}

export default function ThaisotPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-north-america" />;
}
