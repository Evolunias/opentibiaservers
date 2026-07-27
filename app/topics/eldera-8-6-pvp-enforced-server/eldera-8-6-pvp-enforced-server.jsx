import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-6-pvp-enforced-server');
}

export default function Eldera86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-6-pvp-enforced-server" />;
}
