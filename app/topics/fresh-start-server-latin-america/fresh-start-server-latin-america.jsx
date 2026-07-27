import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-latin-america');
}

export default function FreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-latin-america" />;
}
