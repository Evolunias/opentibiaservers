import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-wiki');
}

export default function OfficialTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-wiki" />;
}
