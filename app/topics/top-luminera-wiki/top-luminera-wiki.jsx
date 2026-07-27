import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-wiki');
}

export default function TopLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-wiki" />;
}
