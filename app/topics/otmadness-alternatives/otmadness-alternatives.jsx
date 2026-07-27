import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-alternatives');
}

export default function OtmadnessAlternativesKeywordPage() {
  return <StaticKeywordPage slug="otmadness-alternatives" />;
}
