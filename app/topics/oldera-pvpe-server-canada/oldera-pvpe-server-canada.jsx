import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe-server-canada');
}

export default function OlderaPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe-server-canada" />;
}
