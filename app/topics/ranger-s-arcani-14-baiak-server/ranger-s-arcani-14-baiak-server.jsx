import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-14-baiak-server');
}

export default function RangerSArcani14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-14-baiak-server" />;
}
