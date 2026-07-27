import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-wiki');
}

export default function OfficialRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-wiki" />;
}
