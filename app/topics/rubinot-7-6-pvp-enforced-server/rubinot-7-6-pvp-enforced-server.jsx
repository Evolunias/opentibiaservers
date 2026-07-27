import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-pvp-enforced-server');
}

export default function Rubinot76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-pvp-enforced-server" />;
}
