import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-latin-america');
}

export default function FreshStartClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-latin-america" />;
}
