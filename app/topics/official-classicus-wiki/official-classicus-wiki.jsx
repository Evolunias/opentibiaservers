import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-wiki');
}

export default function OfficialClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-wiki" />;
}
