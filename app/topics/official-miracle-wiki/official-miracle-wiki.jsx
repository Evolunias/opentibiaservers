import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-wiki');
}

export default function OfficialMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-wiki" />;
}
