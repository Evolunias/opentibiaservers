import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-wiki');
}

export default function OfficialTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-wiki" />;
}
