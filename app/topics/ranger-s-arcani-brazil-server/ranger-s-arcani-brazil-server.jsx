import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-brazil-server');
}

export default function RangerSArcaniBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-brazil-server" />;
}
