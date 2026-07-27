import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-europe');
}

export default function AureraGlobalPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-europe" />;
}
