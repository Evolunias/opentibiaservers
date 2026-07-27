import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-wiki');
}

export default function BestZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-wiki" />;
}
