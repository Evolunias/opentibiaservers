import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-guide');
}

export default function NewSeasonYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-guide" />;
}
