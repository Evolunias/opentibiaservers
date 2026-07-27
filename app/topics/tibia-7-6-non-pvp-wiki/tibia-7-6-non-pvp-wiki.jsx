import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-non-pvp-wiki');
}

export default function Tibia76NonPvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-non-pvp-wiki" />;
}
