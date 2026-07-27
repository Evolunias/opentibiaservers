import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-alternatives');
}

export default function CoxaotAlternativesKeywordPage() {
  return <StaticKeywordPage slug="coxaot-alternatives" />;
}
