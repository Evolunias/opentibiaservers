import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-argentina');
}

export default function MediviaPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-argentina" />;
}
