import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-launch-south-america');
}

export default function LowExpLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-launch-south-america" />;
}
