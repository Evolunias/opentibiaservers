import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-canada');
}

export default function SeasonalLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-canada" />;
}
