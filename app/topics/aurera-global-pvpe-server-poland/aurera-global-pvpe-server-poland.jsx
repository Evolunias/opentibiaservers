import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvpe-server-poland');
}

export default function AureraGlobalPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvpe-server-poland" />;
}
