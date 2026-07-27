import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-pvp-enforced-server');
}

export default function Rubinot13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-pvp-enforced-server" />;
}
