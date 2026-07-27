import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-seasonal-wiki');
}

export default function Tibia96SeasonalWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-seasonal-wiki" />;
}
