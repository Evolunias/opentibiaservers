import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-wiki');
}

export default function OfficialCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-wiki" />;
}
