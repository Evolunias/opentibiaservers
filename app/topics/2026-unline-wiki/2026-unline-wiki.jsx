import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-unline-wiki');
}

export default function Keyword2026UnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-unline-wiki" />;
}
