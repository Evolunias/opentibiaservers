import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-wiki');
}

export default function ActiveSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-wiki" />;
}
