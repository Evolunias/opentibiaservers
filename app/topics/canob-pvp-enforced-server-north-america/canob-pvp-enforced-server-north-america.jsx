import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-enforced-server-north-america');
}

export default function CanobPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-enforced-server-north-america" />;
}
