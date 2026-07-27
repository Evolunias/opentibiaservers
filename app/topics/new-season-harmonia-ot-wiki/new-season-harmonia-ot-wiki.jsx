import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-wiki');
}

export default function NewSeasonHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-wiki" />;
}
