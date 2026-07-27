import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-argentina');
}

export default function RealMapLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-argentina" />;
}
