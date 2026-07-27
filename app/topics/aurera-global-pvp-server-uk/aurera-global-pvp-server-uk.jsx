import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-uk');
}

export default function AureraGlobalPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-uk" />;
}
