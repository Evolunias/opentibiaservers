import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-enforced-server-argentina');
}

export default function ElderaPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-enforced-server-argentina" />;
}
