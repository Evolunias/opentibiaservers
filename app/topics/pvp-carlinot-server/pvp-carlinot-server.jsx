import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-carlinot-server');
}

export default function PvpCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-carlinot-server" />;
}
