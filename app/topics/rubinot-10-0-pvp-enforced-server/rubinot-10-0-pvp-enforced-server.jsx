import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-pvp-enforced-server');
}

export default function Rubinot100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-pvp-enforced-server" />;
}
