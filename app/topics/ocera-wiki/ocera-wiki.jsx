import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-wiki');
}

export default function OceraWikiKeywordPage() {
  return <StaticKeywordPage slug="ocera-wiki" />;
}
