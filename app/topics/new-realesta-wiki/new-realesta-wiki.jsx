import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-wiki');
}

export default function NewRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-wiki" />;
}
