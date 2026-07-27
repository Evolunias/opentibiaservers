import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-wiki');
}

export default function TopSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-wiki" />;
}
