import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-uk');
}

export default function SeasonalGuideUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-uk" />;
}
