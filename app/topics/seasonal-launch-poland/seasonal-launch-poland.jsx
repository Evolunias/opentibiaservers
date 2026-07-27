import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-poland');
}

export default function SeasonalLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-poland" />;
}
