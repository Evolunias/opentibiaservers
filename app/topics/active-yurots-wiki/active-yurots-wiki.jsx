import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-wiki');
}

export default function ActiveYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-wiki" />;
}
