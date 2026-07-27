import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-wiki');
}

export default function ActiveClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-wiki" />;
}
