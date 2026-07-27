import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-list-sweden');
}

export default function FreshStartServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-list-sweden" />;
}
