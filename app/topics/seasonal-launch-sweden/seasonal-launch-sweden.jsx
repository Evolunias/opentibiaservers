import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-sweden');
}

export default function SeasonalLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-sweden" />;
}
