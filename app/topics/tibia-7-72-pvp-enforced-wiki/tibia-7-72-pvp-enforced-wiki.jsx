import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvp-enforced-wiki');
}

export default function Tibia772PvpEnforcedWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvp-enforced-wiki" />;
}
