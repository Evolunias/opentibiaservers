import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-mexico');
}

export default function AureraGlobalPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-mexico" />;
}
