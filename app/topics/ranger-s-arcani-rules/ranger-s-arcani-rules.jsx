import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-rules');
}

export default function RangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-rules" />;
}
