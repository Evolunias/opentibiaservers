import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-south-america');
}

export default function ThaisotPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-south-america" />;
}
