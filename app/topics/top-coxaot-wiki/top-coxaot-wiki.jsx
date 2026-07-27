import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-wiki');
}

export default function TopCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-wiki" />;
}
