import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-argentina');
}

export default function SeasonalLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-argentina" />;
}
