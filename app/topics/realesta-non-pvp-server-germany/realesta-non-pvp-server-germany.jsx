import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-non-pvp-server-germany');
}

export default function RealestaNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-non-pvp-server-germany" />;
}
