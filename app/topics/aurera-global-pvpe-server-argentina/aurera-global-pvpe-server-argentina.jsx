import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvpe-server-argentina');
}

export default function AureraGlobalPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvpe-server-argentina" />;
}
