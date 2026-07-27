import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-yurots-server');
}

export default function PvpYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-yurots-server" />;
}
