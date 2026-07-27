import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-north-america');
}

export default function PvpeLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-north-america" />;
}
