import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-wiki');
}

export default function OfficialNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-wiki" />;
}
