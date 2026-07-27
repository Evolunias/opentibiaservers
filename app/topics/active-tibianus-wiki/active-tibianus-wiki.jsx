import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-wiki');
}

export default function ActiveTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-wiki" />;
}
