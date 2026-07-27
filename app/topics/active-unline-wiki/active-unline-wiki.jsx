import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-wiki');
}

export default function ActiveUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="active-unline-wiki" />;
}
