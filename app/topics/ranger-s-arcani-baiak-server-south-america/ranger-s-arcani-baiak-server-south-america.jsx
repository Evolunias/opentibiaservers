import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-baiak-server-south-america');
}

export default function RangerSArcaniBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-baiak-server-south-america" />;
}
