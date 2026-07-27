import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-thaisot-server');
}

export default function PvpThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-thaisot-server" />;
}
