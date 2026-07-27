import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-miracle-server');
}

export default function PvpEnforcedMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-miracle-server" />;
}
