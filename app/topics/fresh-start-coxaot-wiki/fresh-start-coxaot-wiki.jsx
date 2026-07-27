import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-wiki');
}

export default function FreshStartCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-wiki" />;
}
