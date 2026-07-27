import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-uk');
}

export default function SeasonalLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-uk" />;
}
