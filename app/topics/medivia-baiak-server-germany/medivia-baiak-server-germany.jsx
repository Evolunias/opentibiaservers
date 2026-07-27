import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-baiak-server-germany');
}

export default function MediviaBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-baiak-server-germany" />;
}
