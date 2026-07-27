import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-enforced-wiki');
}

export default function Tibia12PvpEnforcedWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-enforced-wiki" />;
}
