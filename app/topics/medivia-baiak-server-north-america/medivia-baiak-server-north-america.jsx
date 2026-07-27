import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-baiak-server-north-america');
}

export default function MediviaBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-baiak-server-north-america" />;
}
