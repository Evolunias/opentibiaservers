import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-wiki');
}

export default function OfficialImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-wiki" />;
}
