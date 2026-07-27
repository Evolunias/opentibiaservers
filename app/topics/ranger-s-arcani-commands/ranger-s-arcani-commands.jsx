import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-commands');
}

export default function RangerSArcaniCommandsKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-commands" />;
}
