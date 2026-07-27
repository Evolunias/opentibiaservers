import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-list-latin-america');
}

export default function FreshStartServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-list-latin-america" />;
}
