import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-latin-america');
}

export default function AlasteraFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-latin-america" />;
}
