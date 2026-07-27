import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-list-brazil');
}

export default function FreshStartServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-list-brazil" />;
}
