import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-guide');
}

export default function ActiveBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-guide" />;
}
