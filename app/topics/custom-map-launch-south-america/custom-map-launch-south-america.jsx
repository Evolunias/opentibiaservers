import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-south-america');
}

export default function CustomMapLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-south-america" />;
}
