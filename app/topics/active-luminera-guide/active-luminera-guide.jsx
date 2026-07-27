import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-guide');
}

export default function ActiveLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-guide" />;
}
