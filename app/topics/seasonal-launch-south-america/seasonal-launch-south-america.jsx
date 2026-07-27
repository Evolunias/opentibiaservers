import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-south-america');
}

export default function SeasonalLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-south-america" />;
}
