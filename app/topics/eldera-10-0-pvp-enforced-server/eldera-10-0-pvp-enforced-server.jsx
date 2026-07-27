import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-pvp-enforced-server');
}

export default function Eldera100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-pvp-enforced-server" />;
}
