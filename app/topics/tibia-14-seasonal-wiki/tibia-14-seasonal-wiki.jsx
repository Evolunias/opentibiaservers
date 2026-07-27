import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-wiki');
}

export default function Tibia14SeasonalWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-wiki" />;
}
