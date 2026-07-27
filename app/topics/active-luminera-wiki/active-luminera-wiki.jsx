import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-wiki');
}

export default function ActiveLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-wiki" />;
}
