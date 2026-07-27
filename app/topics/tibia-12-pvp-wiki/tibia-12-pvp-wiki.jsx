import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-wiki');
}

export default function Tibia12PvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-wiki" />;
}
