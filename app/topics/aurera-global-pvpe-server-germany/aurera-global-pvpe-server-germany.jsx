import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvpe-server-germany');
}

export default function AureraGlobalPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvpe-server-germany" />;
}
