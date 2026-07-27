import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-list-brazil');
}

export default function HighExpServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-list-brazil" />;
}
