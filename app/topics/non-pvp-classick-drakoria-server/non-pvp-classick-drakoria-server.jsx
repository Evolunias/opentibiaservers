import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-classick-drakoria-server');
}

export default function NonPvpClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-classick-drakoria-server" />;
}
