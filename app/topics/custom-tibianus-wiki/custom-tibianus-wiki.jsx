import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-wiki');
}

export default function CustomTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-wiki" />;
}
