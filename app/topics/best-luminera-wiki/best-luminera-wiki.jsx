import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-wiki');
}

export default function BestLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-wiki" />;
}
