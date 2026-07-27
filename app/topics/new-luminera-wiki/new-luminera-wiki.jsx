import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-wiki');
}

export default function NewLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-wiki" />;
}
