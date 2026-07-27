import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-wiki');
}

export default function Tibia11PvpEnforcedWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-wiki" />;
}
