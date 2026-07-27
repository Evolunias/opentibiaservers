import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-list-argentina');
}

export default function FreshStartServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-list-argentina" />;
}
