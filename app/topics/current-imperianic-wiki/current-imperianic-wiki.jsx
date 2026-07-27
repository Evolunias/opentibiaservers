import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-wiki');
}

export default function CurrentImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-wiki" />;
}
