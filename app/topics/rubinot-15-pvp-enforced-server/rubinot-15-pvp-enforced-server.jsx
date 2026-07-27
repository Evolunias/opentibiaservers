import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-pvp-enforced-server');
}

export default function Rubinot15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-pvp-enforced-server" />;
}
