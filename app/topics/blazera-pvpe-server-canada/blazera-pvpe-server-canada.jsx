import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-canada');
}

export default function BlazeraPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-canada" />;
}
