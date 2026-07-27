import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-fresh-start-server-north-america');
}

export default function RangerSArcaniFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-fresh-start-server-north-america" />;
}
