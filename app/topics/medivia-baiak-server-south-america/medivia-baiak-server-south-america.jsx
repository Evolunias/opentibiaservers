import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-baiak-server-south-america');
}

export default function MediviaBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-baiak-server-south-america" />;
}
