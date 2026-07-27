import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-uk');
}

export default function ArcaniarlPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-uk" />;
}
