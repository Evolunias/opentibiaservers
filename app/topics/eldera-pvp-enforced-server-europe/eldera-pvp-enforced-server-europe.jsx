import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-enforced-server-europe');
}

export default function ElderaPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-enforced-server-europe" />;
}
