import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-wiki');
}

export default function LowrateCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-wiki" />;
}
