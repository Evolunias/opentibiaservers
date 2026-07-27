import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-enforced-server-canada');
}

export default function CanobPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-enforced-server-canada" />;
}
