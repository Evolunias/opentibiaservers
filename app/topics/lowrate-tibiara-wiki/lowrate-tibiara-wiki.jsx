import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-wiki');
}

export default function LowrateTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-wiki" />;
}
