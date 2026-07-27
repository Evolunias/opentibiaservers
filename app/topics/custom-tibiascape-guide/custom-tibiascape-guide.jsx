import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-guide');
}

export default function CustomTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-guide" />;
}
