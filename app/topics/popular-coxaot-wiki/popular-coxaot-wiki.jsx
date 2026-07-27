import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-wiki');
}

export default function PopularCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-wiki" />;
}
