import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-rubinot-wiki');
}

export default function Keyword2026RubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-rubinot-wiki" />;
}
