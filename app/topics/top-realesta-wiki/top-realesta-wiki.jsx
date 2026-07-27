import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-wiki');
}

export default function TopRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-wiki" />;
}
