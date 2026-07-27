import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-germany');
}

export default function SeasonalLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-germany" />;
}
