import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-baiak-server-argentina');
}

export default function MediviaBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-baiak-server-argentina" />;
}
