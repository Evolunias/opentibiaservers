import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-register');
}

export default function RangerSArcaniRegisterKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-register" />;
}
