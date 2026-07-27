import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-germany');
}

export default function SeasonalGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-germany" />;
}
