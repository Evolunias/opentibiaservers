import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-south-america');
}

export default function ThorniaPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-south-america" />;
}
