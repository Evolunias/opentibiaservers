import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-guide');
}

export default function TibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-guide" />;
}
