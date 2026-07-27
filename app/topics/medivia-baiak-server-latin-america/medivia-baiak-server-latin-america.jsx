import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-baiak-server-latin-america');
}

export default function MediviaBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-baiak-server-latin-america" />;
}
