import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-north-america');
}

export default function SeasonalLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-north-america" />;
}
