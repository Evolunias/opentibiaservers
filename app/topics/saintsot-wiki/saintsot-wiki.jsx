import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-wiki');
}

export default function SaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="saintsot-wiki" />;
}
