import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-enforced-wiki');
}

export default function Tibia100PvpEnforcedWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-enforced-wiki" />;
}
