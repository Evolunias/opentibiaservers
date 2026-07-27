import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-argentina');
}

export default function ThorniaPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-argentina" />;
}
