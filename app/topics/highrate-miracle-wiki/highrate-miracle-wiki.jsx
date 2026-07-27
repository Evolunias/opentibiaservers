import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-wiki');
}

export default function HighrateMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-wiki" />;
}
