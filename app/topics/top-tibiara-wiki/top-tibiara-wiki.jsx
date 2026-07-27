import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-wiki');
}

export default function TopTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-wiki" />;
}
