import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-non-pvp-server-poland');
}

export default function AureraGlobalNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-non-pvp-server-poland" />;
}
