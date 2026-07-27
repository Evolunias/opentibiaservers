import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-europe');
}

export default function MediviaPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-europe" />;
}
