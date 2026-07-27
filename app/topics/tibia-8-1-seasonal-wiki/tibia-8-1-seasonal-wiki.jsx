import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-seasonal-wiki');
}

export default function Tibia81SeasonalWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-seasonal-wiki" />;
}
