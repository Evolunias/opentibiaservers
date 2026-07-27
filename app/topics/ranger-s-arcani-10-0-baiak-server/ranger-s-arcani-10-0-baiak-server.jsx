import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-10-0-baiak-server');
}

export default function RangerSArcani100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-10-0-baiak-server" />;
}
