import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-guide');
}

export default function LowrateTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-guide" />;
}
