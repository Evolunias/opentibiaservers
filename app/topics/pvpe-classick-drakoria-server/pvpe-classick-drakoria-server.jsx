import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-classick-drakoria-server');
}

export default function PvpeClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-classick-drakoria-server" />;
}
