import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-wiki');
}

export default function NewNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-wiki" />;
}
