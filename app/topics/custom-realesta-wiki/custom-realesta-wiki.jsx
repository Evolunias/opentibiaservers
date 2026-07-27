import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-wiki');
}

export default function CustomRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-wiki" />;
}
