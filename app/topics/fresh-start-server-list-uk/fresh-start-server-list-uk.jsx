import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-list-uk');
}

export default function FreshStartServerListUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-list-uk" />;
}
