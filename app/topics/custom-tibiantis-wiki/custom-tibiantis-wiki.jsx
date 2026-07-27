import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-wiki');
}

export default function CustomTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-wiki" />;
}
