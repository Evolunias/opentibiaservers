import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-guide');
}

export default function FreshStartTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-guide" />;
}
