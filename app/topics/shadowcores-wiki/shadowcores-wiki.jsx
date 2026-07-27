import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-wiki');
}

export default function ShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-wiki" />;
}
