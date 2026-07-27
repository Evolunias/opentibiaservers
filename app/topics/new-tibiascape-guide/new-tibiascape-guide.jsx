import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-guide');
}

export default function NewTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-guide" />;
}
