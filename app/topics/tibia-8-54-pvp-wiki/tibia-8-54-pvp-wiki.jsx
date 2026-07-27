import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-wiki');
}

export default function Tibia854PvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-wiki" />;
}
