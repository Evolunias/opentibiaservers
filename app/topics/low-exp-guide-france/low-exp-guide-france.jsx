import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-france');
}

export default function LowExpGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-france" />;
}
