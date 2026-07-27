import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-argentina');
}

export default function AureraGlobalPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-argentina" />;
}
