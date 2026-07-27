import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-enforced-server-uk');
}

export default function AureraGlobalPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-enforced-server-uk" />;
}
