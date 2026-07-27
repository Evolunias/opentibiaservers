import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-wiki');
}

export default function NoResetRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-wiki" />;
}
