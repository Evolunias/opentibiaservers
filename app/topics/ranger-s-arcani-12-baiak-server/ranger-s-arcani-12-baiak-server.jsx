import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-baiak-server');
}

export default function RangerSArcani12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-baiak-server" />;
}
