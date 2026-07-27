import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-wiki');
}

export default function ClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="classicus-wiki" />;
}
