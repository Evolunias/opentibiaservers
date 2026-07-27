import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-seasonal-wiki');
}

export default function Tibia12SeasonalWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-seasonal-wiki" />;
}
