import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-wiki');
}

export default function TopImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-wiki" />;
}
