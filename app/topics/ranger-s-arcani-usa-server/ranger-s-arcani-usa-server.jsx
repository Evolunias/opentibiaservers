import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-usa-server');
}

export default function RangerSArcaniUsaServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-usa-server" />;
}
