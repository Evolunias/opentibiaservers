import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-baiak-server-usa');
}

export default function MediviaBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-baiak-server-usa" />;
}
