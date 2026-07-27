import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-wiki');
}

export default function OfficialThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-wiki" />;
}
