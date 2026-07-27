import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-wiki');
}

export default function CustomLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-wiki" />;
}
