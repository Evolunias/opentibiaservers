import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-11-fresh-start-server');
}

export default function RangerSArcani11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-11-fresh-start-server" />;
}
