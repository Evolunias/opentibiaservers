import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-europe');
}

export default function ArcaniarlPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-europe" />;
}
