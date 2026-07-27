import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-latin-america-server');
}

export default function RangerSArcaniLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-latin-america-server" />;
}
