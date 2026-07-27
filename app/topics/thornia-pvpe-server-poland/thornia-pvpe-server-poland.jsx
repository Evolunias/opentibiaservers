import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-poland');
}

export default function ThorniaPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-poland" />;
}
