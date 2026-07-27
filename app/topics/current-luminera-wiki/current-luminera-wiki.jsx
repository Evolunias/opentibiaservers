import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-wiki');
}

export default function CurrentLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-wiki" />;
}
