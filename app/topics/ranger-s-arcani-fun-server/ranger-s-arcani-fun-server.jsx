import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-fun-server');
}

export default function RangerSArcaniFunServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-fun-server" />;
}
