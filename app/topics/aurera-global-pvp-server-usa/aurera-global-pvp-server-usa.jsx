import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-usa');
}

export default function AureraGlobalPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-usa" />;
}
