import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-wiki');
}

export default function CurrentNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-wiki" />;
}
