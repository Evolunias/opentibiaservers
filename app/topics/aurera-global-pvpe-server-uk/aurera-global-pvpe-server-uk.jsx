import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvpe-server-uk');
}

export default function AureraGlobalPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvpe-server-uk" />;
}
