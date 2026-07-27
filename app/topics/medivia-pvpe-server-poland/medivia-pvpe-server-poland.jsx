import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-poland');
}

export default function MediviaPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-poland" />;
}
