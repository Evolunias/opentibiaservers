import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-south-america');
}

export default function ArcaniarlPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-south-america" />;
}
