import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-wiki');
}

export default function TibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="tibianus-wiki" />;
}
