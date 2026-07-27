import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-launch-south-america');
}

export default function NoResetLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-launch-south-america" />;
}
