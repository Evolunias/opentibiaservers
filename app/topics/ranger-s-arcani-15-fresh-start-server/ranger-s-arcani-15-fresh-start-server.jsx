import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-15-fresh-start-server');
}

export default function RangerSArcani15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-15-fresh-start-server" />;
}
