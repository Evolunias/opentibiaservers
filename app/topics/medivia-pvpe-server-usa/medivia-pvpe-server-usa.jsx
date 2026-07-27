import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-usa');
}

export default function MediviaPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-usa" />;
}
