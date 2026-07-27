import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-france');
}

export default function AureraGlobalPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-france" />;
}
