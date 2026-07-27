import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-wiki');
}

export default function TopThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-wiki" />;
}
