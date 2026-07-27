import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-usa');
}

export default function ArcaniarlPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-usa" />;
}
