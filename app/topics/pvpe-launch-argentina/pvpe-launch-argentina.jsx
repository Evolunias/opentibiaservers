import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-argentina');
}

export default function PvpeLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-argentina" />;
}
