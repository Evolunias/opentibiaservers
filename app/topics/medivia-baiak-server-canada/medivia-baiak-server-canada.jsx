import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-baiak-server-canada');
}

export default function MediviaBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-baiak-server-canada" />;
}
