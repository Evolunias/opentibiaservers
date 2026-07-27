import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe-server-france');
}

export default function ElderaPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe-server-france" />;
}
