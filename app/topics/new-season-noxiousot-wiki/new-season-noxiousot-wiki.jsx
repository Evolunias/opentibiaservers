import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-wiki');
}

export default function NewSeasonNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-wiki" />;
}
