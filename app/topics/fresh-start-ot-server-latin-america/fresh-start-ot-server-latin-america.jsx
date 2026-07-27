import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-latin-america');
}

export default function FreshStartOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-latin-america" />;
}
