import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-enforced-server-germany');
}

export default function RealestaPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-enforced-server-germany" />;
}
