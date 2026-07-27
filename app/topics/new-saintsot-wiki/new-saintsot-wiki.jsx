import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-wiki');
}

export default function NewSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-wiki" />;
}
