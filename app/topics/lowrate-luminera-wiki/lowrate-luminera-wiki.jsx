import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-wiki');
}

export default function LowrateLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-wiki" />;
}
