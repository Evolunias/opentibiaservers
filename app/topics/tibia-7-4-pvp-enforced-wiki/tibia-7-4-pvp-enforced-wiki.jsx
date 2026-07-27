import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-enforced-wiki');
}

export default function Tibia74PvpEnforcedWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-enforced-wiki" />;
}
