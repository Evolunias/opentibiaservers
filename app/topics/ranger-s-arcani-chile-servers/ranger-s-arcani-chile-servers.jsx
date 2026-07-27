import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-chile-servers');
}

export default function RangerSArcaniChileServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-chile-servers" />;
}
