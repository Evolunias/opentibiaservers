import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-germany');
}

export default function AureraGlobalPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-germany" />;
}
