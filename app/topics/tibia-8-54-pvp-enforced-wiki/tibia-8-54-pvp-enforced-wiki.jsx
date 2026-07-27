import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-enforced-wiki');
}

export default function Tibia854PvpEnforcedWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-enforced-wiki" />;
}
