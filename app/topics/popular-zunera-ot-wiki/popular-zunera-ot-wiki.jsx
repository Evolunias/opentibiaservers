import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-wiki');
}

export default function PopularZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-wiki" />;
}
