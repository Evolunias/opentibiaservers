import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-sweden');
}

export default function RealMapLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-sweden" />;
}
