import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-rare-items');
}

export default function ReneraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="renera-rare-items" />;
}
