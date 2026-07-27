import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-6-pvp-enforced-server');
}

export default function Rubinot86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-6-pvp-enforced-server" />;
}
