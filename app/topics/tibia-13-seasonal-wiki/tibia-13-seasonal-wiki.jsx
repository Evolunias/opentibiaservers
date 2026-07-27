import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-seasonal-wiki');
}

export default function Tibia13SeasonalWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-seasonal-wiki" />;
}
