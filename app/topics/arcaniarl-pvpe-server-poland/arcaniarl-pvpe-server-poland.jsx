import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-poland');
}

export default function ArcaniarlPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-poland" />;
}
