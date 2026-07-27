import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-enforced-server-mexico');
}

export default function ElderaPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-enforced-server-mexico" />;
}
