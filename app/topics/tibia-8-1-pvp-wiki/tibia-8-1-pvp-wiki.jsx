import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-wiki');
}

export default function Tibia81PvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-wiki" />;
}
