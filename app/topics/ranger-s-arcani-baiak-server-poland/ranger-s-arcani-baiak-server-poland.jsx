import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-baiak-server-poland');
}

export default function RangerSArcaniBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-baiak-server-poland" />;
}
