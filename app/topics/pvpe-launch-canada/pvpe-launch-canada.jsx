import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-canada');
}

export default function PvpeLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-canada" />;
}
