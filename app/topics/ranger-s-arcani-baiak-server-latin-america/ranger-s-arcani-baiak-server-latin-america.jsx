import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-baiak-server-latin-america');
}

export default function RangerSArcaniBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-baiak-server-latin-america" />;
}
