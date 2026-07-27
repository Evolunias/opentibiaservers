import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-baiak-server-europe');
}

export default function RangerSArcaniBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-baiak-server-europe" />;
}
