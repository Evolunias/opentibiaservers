import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-south-america');
}

export default function NtoStarPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-south-america" />;
}
