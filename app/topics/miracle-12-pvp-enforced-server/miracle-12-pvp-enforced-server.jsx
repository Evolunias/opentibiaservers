import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-pvp-enforced-server');
}

export default function Miracle12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-pvp-enforced-server" />;
}
