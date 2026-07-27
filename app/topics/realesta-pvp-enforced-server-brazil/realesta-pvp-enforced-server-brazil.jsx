import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-enforced-server-brazil');
}

export default function RealestaPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-enforced-server-brazil" />;
}
