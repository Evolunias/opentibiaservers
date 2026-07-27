import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-germany');
}

export default function PvpeLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-germany" />;
}
