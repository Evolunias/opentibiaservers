import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-wiki');
}

export default function NoResetShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-wiki" />;
}
