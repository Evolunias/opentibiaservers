import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-11-baiak-server');
}

export default function RangerSArcani11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-11-baiak-server" />;
}
