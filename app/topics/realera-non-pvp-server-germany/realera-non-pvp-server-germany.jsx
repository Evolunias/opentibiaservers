import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-non-pvp-server-germany');
}

export default function RealeraNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-non-pvp-server-germany" />;
}
