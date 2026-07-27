import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-wiki');
}

export default function FreshStartInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-wiki" />;
}
