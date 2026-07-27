import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-germany');
}

export default function MediviaPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-germany" />;
}
