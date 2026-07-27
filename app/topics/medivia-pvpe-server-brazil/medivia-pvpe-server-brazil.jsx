import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-brazil');
}

export default function MediviaPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-brazil" />;
}
