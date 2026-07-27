import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-ot-server');
}

export default function RangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-ot-server" />;
}
