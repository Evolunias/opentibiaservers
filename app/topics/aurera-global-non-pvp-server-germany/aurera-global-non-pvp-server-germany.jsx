import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-non-pvp-server-germany');
}

export default function AureraGlobalNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-non-pvp-server-germany" />;
}
