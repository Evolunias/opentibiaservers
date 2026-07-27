import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-latin-america');
}

export default function ArcaniarlPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-latin-america" />;
}
