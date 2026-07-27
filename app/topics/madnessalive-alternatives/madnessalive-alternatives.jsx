import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-alternatives');
}

export default function MadnessaliveAlternativesKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-alternatives" />;
}
