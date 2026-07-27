import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-launch-sweden');
}

export default function NoResetLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-launch-sweden" />;
}
