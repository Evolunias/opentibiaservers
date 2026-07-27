import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-guide');
}

export default function CustomLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-guide" />;
}
