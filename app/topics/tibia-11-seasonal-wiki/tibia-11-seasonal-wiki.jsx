import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-wiki');
}

export default function Tibia11SeasonalWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-wiki" />;
}
