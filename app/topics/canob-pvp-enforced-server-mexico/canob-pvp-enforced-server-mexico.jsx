import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-enforced-server-mexico');
}

export default function CanobPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-enforced-server-mexico" />;
}
