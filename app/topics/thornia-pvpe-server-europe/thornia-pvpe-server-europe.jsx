import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-europe');
}

export default function ThorniaPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-europe" />;
}
