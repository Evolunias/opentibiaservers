import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-baiak-server-germany');
}

export default function RangerSArcaniBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-baiak-server-germany" />;
}
