import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-wiki');
}

export default function FreshStartSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-wiki" />;
}
