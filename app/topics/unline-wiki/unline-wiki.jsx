import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-wiki');
}

export default function UnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="unline-wiki" />;
}
