import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-10-0-fresh-start-server');
}

export default function RangerSArcani100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-10-0-fresh-start-server" />;
}
