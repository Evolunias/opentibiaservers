import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-enforced-server-usa');
}

export default function ElderaPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-enforced-server-usa" />;
}
