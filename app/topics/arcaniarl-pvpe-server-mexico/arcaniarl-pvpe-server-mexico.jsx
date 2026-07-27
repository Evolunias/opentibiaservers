import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-mexico');
}

export default function ArcaniarlPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-mexico" />;
}
