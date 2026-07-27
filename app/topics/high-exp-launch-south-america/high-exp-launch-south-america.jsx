import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-south-america');
}

export default function HighExpLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-south-america" />;
}
