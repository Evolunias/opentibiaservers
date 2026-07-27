import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-guide');
}

export default function CustomBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-guide" />;
}
