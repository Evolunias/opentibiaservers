import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-north-america');
}

export default function ThorniaPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-north-america" />;
}
