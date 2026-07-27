import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-usa');
}

export default function SeasonalLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-usa" />;
}
