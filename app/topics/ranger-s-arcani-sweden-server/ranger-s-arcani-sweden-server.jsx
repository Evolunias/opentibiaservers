import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-sweden-server');
}

export default function RangerSArcaniSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-sweden-server" />;
}
