import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-alternatives');
}

export default function InfernalOtAlternativesKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-alternatives" />;
}
