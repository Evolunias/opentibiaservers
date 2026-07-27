import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-guide');
}

export default function PopularLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-guide" />;
}
