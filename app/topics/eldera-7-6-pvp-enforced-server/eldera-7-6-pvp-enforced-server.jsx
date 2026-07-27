import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-pvp-enforced-server');
}

export default function Eldera76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-pvp-enforced-server" />;
}
