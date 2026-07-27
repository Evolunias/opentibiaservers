import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-list-mexico');
}

export default function FreshStartServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-list-mexico" />;
}
