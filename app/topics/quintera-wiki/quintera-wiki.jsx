import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-wiki');
}

export default function QuinteraWikiKeywordPage() {
  return <StaticKeywordPage slug="quintera-wiki" />;
}
