import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-enforced-server-latin-america');
}

export default function CanobPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-enforced-server-latin-america" />;
}
