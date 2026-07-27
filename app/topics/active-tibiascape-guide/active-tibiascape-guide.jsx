import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-guide');
}

export default function ActiveTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-guide" />;
}
