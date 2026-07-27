import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-wiki');
}

export default function ActiveTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-wiki" />;
}
