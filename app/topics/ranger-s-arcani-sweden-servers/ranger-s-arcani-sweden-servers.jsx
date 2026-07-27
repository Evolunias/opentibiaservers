import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-sweden-servers');
}

export default function RangerSArcaniSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-sweden-servers" />;
}
