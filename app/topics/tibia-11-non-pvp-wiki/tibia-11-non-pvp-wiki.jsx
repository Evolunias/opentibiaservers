import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-wiki');
}

export default function Tibia11NonPvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-wiki" />;
}
