import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-0-pvp-enforced-server');
}

export default function Eldera80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-0-pvp-enforced-server" />;
}
