import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-france');
}

export default function ThorniaPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-france" />;
}
