import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-north-america');
}

export default function MediviaPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-north-america" />;
}
