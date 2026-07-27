import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-poland');
}

export default function AureraGlobalPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-poland" />;
}
