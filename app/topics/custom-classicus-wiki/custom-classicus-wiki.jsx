import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-wiki');
}

export default function CustomClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-wiki" />;
}
