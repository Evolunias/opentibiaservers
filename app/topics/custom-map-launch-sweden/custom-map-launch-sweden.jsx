import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-sweden');
}

export default function CustomMapLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-sweden" />;
}
