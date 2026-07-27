import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-canada');
}

export default function OriginaltibiaPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-canada" />;
}
