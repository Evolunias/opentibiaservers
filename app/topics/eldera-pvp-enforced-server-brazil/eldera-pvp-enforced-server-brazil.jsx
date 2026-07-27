import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-enforced-server-brazil');
}

export default function ElderaPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-enforced-server-brazil" />;
}
