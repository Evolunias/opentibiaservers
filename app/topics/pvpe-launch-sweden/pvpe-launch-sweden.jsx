import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-sweden');
}

export default function PvpeLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-sweden" />;
}
