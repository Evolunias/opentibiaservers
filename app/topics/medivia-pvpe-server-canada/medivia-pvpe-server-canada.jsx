import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-canada');
}

export default function MediviaPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-canada" />;
}
