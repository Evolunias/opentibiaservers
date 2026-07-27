import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-pvp-enforced-server');
}

export default function Rubinot14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-pvp-enforced-server" />;
}
