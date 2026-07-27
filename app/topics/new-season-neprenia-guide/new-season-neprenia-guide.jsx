import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-guide');
}

export default function NewSeasonNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-guide" />;
}
