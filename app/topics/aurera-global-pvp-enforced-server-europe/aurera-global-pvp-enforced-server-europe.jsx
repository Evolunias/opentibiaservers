import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-enforced-server-europe');
}

export default function AureraGlobalPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-enforced-server-europe" />;
}
