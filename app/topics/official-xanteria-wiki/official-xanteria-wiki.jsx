import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-wiki');
}

export default function OfficialXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-wiki" />;
}
