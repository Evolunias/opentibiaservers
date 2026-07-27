import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-uk');
}

export default function ThorniaPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-uk" />;
}
