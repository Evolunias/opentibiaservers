import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-brazil');
}

export default function SeasonalLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-brazil" />;
}
