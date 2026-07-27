import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-guide');
}

export default function LumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="luminera-guide" />;
}
