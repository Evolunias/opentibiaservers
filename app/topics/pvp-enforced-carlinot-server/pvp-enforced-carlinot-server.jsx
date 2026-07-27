import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-carlinot-server');
}

export default function PvpEnforcedCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-carlinot-server" />;
}
