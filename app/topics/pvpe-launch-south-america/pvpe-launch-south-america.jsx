import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-south-america');
}

export default function PvpeLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-south-america" />;
}
