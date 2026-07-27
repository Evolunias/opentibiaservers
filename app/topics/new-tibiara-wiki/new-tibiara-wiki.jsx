import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-wiki');
}

export default function NewTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-wiki" />;
}
