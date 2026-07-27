import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-wiki');
}

export default function NewSeasonLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-wiki" />;
}
