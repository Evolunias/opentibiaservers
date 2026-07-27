import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe');
}

export default function MediviaPvpeKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe" />;
}
