import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-98-pvp-enforced-server');
}

export default function Rubinot1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-98-pvp-enforced-server" />;
}
