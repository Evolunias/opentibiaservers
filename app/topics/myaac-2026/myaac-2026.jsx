import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-2026');
}

export default function Myaac2026KeywordPage() {
  return <StaticKeywordPage slug="myaac-2026" />;
}
