import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-baiak-server-uk');
}

export default function RangerSArcaniBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-baiak-server-uk" />;
}
