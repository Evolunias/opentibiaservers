import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-france');
}

export default function ArcaniarlPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-france" />;
}
