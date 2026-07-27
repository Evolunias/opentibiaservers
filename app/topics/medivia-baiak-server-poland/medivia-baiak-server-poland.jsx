import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-baiak-server-poland');
}

export default function MediviaBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-baiak-server-poland" />;
}
