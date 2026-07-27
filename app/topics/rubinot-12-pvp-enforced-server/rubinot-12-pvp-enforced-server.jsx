import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-pvp-enforced-server');
}

export default function Rubinot12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-pvp-enforced-server" />;
}
