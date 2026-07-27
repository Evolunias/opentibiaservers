import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-wiki');
}

export default function FreshStartNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-wiki" />;
}
