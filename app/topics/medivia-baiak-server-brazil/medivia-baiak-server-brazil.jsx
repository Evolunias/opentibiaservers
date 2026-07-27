import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-baiak-server-brazil');
}

export default function MediviaBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-baiak-server-brazil" />;
}
