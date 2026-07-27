import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-wiki');
}

export default function Tibia11PvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-wiki" />;
}
