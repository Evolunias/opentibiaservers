import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-rubinot-guide');
}

export default function Keyword2026RubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-rubinot-guide" />;
}
