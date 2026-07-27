import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-france');
}

export default function HighExpGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-france" />;
}
