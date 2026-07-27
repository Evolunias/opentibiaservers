import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-baiak-server-mexico');
}

export default function RangerSArcaniBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-baiak-server-mexico" />;
}
