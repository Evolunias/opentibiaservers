import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-server-germany');
}

export default function RealestaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-server-germany" />;
}
