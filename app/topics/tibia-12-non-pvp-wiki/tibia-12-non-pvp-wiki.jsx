import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-non-pvp-wiki');
}

export default function Tibia12NonPvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-non-pvp-wiki" />;
}
