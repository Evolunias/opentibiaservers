import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-seasonal-wiki');
}

export default function Tibia772SeasonalWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-seasonal-wiki" />;
}
