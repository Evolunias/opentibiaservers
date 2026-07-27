import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-classick-drakoria-server');
}

export default function PvpClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-classick-drakoria-server" />;
}
