import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-enforced-server-uk');
}

export default function ElderaPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-enforced-server-uk" />;
}
