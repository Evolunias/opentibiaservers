import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-4-baiak-server');
}

export default function RangerSArcani84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-4-baiak-server" />;
}
