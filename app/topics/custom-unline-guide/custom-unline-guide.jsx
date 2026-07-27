import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-guide');
}

export default function CustomUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-guide" />;
}
