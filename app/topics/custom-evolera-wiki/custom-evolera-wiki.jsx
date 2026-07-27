import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-wiki');
}

export default function CustomEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-wiki" />;
}
