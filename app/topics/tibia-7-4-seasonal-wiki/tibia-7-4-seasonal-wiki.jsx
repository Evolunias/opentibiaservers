import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-wiki');
}

export default function Tibia74SeasonalWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-wiki" />;
}
