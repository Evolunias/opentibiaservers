import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-wiki');
}

export default function OfficialNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-wiki" />;
}
