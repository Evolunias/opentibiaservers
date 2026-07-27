import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-wiki');
}

export default function NewRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="new-realera-wiki" />;
}
