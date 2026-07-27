import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-enforced-server-france');
}

export default function CanobPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-enforced-server-france" />;
}
