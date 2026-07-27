import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe-server-france');
}

export default function RealeraPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe-server-france" />;
}
