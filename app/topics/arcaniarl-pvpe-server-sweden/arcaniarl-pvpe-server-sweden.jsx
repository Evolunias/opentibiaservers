import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-sweden');
}

export default function ArcaniarlPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-sweden" />;
}
