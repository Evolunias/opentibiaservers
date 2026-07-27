import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-wiki');
}

export default function NewSeasonCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-wiki" />;
}
