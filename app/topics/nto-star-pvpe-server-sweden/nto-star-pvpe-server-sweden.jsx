import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-sweden');
}

export default function NtoStarPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-sweden" />;
}
