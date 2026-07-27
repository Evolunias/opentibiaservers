import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-6-baiak-server');
}

export default function RangerSArcani76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-6-baiak-server" />;
}
