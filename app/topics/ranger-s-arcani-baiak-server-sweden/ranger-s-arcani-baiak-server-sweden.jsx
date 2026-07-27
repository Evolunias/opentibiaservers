import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-baiak-server-sweden');
}

export default function RangerSArcaniBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-baiak-server-sweden" />;
}
