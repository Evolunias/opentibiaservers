import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-guide');
}

export default function NewSeasonCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-guide" />;
}
