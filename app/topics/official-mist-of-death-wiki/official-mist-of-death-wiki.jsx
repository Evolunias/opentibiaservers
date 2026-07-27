import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-wiki');
}

export default function OfficialMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-wiki" />;
}
