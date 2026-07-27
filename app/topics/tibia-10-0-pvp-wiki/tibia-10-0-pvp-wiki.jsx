import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-wiki');
}

export default function Tibia100PvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-wiki" />;
}
