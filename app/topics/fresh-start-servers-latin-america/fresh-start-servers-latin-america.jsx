import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-servers-latin-america');
}

export default function FreshStartServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-servers-latin-america" />;
}
