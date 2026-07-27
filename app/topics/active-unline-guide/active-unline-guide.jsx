import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-guide');
}

export default function ActiveUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="active-unline-guide" />;
}
