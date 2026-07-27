import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-wiki');
}

export default function NewSeasonInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-wiki" />;
}
