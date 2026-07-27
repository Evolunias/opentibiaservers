import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvpe-server-europe');
}

export default function AureraGlobalPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvpe-server-europe" />;
}
