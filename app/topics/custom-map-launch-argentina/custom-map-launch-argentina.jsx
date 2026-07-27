import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-argentina');
}

export default function CustomMapLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-argentina" />;
}
