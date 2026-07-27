import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-enforced-server-brazil');
}

export default function CanobPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-enforced-server-brazil" />;
}
