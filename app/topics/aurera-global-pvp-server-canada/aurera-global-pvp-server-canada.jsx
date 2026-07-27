import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-canada');
}

export default function AureraGlobalPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-canada" />;
}
