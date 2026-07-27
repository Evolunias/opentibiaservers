import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-wiki');
}

export default function BestEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-wiki" />;
}
