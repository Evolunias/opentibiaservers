import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-enforced-wiki');
}

export default function Tibia14PvpEnforcedWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-enforced-wiki" />;
}
