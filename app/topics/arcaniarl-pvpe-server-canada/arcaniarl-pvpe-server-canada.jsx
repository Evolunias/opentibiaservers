import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-canada');
}

export default function ArcaniarlPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-canada" />;
}
