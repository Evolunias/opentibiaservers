import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-wiki');
}

export default function PopularSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-wiki" />;
}
