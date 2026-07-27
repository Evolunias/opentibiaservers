import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-poland');
}

export default function SeasonalGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-poland" />;
}
