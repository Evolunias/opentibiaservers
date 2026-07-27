import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-wiki');
}

export default function TopInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-wiki" />;
}
