import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-wiki');
}

export default function ActiveEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-wiki" />;
}
