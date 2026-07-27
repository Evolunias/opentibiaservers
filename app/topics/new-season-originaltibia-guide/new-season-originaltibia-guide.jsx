import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-guide');
}

export default function NewSeasonOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-guide" />;
}
