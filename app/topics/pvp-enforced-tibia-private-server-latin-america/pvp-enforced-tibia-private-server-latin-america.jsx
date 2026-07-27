import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibia-private-server-latin-america');
}

export default function PvpEnforcedTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibia-private-server-latin-america" />;
}
