import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-1-pvp-enforced-server');
}

export default function Rubinot71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-1-pvp-enforced-server" />;
}
