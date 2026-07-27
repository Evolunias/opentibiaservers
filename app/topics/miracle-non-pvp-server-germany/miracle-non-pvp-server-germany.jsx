import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-non-pvp-server-germany');
}

export default function MiracleNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="miracle-non-pvp-server-germany" />;
}
