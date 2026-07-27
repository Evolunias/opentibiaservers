import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-list-usa');
}

export default function FreshStartServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-list-usa" />;
}
