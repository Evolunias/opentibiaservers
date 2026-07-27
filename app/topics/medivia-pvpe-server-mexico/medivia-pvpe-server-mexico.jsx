import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-mexico');
}

export default function MediviaPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-mexico" />;
}
