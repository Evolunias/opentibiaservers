import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-1-pvp-enforced-server');
}

export default function Eldera71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-1-pvp-enforced-server" />;
}
