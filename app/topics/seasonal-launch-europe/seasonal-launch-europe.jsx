import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-europe');
}

export default function SeasonalLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-europe" />;
}
