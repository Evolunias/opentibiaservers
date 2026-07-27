import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-4-baiak-server');
}

export default function RangerSArcani74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-4-baiak-server" />;
}
