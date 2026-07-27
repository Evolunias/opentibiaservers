import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-login');
}

export default function RangerSArcaniLoginKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-login" />;
}
