import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-wiki');
}

export default function CustomSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-wiki" />;
}
