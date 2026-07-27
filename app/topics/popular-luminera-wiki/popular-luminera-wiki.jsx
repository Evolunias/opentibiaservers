import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-wiki');
}

export default function PopularLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-wiki" />;
}
