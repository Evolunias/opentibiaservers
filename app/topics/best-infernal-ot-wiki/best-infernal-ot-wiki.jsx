import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-wiki');
}

export default function BestInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-wiki" />;
}
