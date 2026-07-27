import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-arcaniarl-server');
}

export default function PvpeArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-arcaniarl-server" />;
}
