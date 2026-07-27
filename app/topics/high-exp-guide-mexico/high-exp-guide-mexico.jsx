import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-mexico');
}

export default function HighExpGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-mexico" />;
}
