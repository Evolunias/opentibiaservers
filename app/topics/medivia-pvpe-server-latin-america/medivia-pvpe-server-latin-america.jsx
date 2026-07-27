import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-latin-america');
}

export default function MediviaPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-latin-america" />;
}
