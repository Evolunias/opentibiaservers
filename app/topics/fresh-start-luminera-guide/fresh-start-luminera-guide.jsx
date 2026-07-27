import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-guide');
}

export default function FreshStartLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-guide" />;
}
