import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-launch-sweden');
}

export default function LowExpLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-launch-sweden" />;
}
