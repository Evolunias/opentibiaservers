import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-wiki');
}

export default function NewThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-wiki" />;
}
