import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-13-baiak-server');
}

export default function RangerSArcani13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-13-baiak-server" />;
}
