import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-wiki');
}

export default function NewShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-wiki" />;
}
