import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-argentina');
}

export default function ArcaniarlPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-argentina" />;
}
