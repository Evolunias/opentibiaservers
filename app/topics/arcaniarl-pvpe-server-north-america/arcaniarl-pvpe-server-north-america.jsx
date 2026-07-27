import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-north-america');
}

export default function ArcaniarlPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-north-america" />;
}
