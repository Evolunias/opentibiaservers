import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-wiki');
}

export default function TopZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-wiki" />;
}
