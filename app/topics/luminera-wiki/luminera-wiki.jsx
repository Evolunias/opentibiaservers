import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-wiki');
}

export default function LumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="luminera-wiki" />;
}
