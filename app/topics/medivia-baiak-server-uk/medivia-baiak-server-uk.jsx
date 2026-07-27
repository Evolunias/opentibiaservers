import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-baiak-server-uk');
}

export default function MediviaBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-baiak-server-uk" />;
}
