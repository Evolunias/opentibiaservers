import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-alternatives');
}

export default function EmpirebrAlternativesKeywordPage() {
  return <StaticKeywordPage slug="empirebr-alternatives" />;
}
