import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-chile-server');
}

export default function RangerSArcaniChileServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-chile-server" />;
}
