import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-wiki');
}

export default function OfficialRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="official-realera-wiki" />;
}
