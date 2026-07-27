import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-enforced-server-usa');
}

export default function CanobPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-enforced-server-usa" />;
}
