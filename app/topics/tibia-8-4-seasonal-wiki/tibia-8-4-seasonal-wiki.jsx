import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-seasonal-wiki');
}

export default function Tibia84SeasonalWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-seasonal-wiki" />;
}
