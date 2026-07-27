import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-baiak-server-argentina');
}

export default function RangerSArcaniBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-baiak-server-argentina" />;
}
