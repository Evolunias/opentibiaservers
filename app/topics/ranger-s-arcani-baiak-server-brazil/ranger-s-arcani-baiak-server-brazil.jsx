import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-baiak-server-brazil');
}

export default function RangerSArcaniBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-baiak-server-brazil" />;
}
