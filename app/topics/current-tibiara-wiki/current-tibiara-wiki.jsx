import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-wiki');
}

export default function CurrentTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-wiki" />;
}
