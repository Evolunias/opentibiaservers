import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-wiki');
}

export default function CurrentThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-wiki" />;
}
