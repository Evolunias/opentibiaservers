import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-wiki');
}

export default function OfficialZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-wiki" />;
}
