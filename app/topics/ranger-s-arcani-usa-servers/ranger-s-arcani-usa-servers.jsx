import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-usa-servers');
}

export default function RangerSArcaniUsaServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-usa-servers" />;
}
