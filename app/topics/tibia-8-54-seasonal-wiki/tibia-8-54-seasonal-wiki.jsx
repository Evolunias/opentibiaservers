import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-seasonal-wiki');
}

export default function Tibia854SeasonalWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-seasonal-wiki" />;
}
