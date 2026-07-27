import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-wiki');
}

export default function FreshStartZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-wiki" />;
}
