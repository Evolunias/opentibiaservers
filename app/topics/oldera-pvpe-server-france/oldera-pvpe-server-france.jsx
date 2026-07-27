import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe-server-france');
}

export default function OlderaPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe-server-france" />;
}
