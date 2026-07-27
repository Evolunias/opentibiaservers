import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-seasonal-wiki');
}

export default function Tibia80SeasonalWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-seasonal-wiki" />;
}
