import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-france');
}

export default function RealestaPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-france" />;
}
