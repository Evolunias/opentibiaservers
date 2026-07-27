import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-wiki');
}

export default function PopularInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-wiki" />;
}
