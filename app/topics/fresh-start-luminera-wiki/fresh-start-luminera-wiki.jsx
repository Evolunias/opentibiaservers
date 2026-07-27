import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-wiki');
}

export default function FreshStartLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-wiki" />;
}
