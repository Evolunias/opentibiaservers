import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-wiki');
}

export default function FreshStartMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-wiki" />;
}
