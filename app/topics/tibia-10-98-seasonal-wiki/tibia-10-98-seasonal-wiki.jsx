import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-seasonal-wiki');
}

export default function Tibia1098SeasonalWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-seasonal-wiki" />;
}
