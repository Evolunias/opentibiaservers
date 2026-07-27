import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-wiki');
}

export default function NewImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-wiki" />;
}
