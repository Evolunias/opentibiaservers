import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-72-pvp-enforced-server');
}

export default function Rubinot772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-72-pvp-enforced-server" />;
}
