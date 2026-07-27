import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-brazil');
}

export default function ThorniaPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-brazil" />;
}
