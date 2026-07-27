import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-sabrehaven-guide');
}

export default function Keyword2026SabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-sabrehaven-guide" />;
}
