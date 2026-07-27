import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-15-baiak-server');
}

export default function RangerSArcani15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-15-baiak-server" />;
}
