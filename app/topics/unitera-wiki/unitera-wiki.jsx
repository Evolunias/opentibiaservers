import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-wiki');
}

export default function UniteraWikiKeywordPage() {
  return <StaticKeywordPage slug="unitera-wiki" />;
}
