import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-mexico');
}

export default function LowExpGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-mexico" />;
}
