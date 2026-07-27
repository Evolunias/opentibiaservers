import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-wiki');
}

export default function NoResetXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-wiki" />;
}
