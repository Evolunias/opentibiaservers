import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-wiki');
}

export default function OfficialTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-wiki" />;
}
