import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-pvp-enforced-server');
}

export default function Rubinot96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-pvp-enforced-server" />;
}
