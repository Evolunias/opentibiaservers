import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-wiki');
}

export default function FreshStartThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-wiki" />;
}
