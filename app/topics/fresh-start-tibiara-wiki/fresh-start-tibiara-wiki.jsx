import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-wiki');
}

export default function FreshStartTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-wiki" />;
}
