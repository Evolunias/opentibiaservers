import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-enforced-server-poland');
}

export default function ElderaPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-enforced-server-poland" />;
}
