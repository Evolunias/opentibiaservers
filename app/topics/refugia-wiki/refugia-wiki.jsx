import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-wiki');
}

export default function RefugiaWikiKeywordPage() {
  return <StaticKeywordPage slug="refugia-wiki" />;
}
