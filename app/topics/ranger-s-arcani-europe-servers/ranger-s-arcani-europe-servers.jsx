import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-europe-servers');
}

export default function RangerSArcaniEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-europe-servers" />;
}
