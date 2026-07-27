import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-wiki');
}

export default function HighrateCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-wiki" />;
}
