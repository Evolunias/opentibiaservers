import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-enforced-server-brazil');
}

export default function RealeraPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-enforced-server-brazil" />;
}
