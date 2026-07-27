import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibiascape-server');
}

export default function PvpTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibiascape-server" />;
}
