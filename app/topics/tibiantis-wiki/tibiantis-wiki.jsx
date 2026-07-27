import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-wiki');
}

export default function TibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-wiki" />;
}
