import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-south-america');
}

export default function RealMapLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-south-america" />;
}
