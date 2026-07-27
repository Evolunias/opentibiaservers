import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-wiki');
}

export default function BestSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-wiki" />;
}
