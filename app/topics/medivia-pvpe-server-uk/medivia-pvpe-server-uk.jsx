import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-uk');
}

export default function MediviaPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-uk" />;
}
