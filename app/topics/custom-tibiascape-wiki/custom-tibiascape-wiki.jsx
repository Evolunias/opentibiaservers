import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-wiki');
}

export default function CustomTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-wiki" />;
}
