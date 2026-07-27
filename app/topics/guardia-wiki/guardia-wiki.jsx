import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-wiki');
}

export default function GuardiaWikiKeywordPage() {
  return <StaticKeywordPage slug="guardia-wiki" />;
}
