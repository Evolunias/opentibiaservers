import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-wiki');
}

export default function SecuraWikiKeywordPage() {
  return <StaticKeywordPage slug="secura-wiki" />;
}
