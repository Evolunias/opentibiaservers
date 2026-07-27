import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-germany');
}

export default function ArcaniarlPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-germany" />;
}
