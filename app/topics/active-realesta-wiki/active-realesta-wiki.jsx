import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-wiki');
}

export default function ActiveRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-wiki" />;
}
