import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-enforced-server-poland');
}

export default function AureraGlobalPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-enforced-server-poland" />;
}
