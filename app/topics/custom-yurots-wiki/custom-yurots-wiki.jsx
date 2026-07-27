import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-wiki');
}

export default function CustomYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-wiki" />;
}
