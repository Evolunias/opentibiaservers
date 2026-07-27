import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-training');
}

export default function TibijkaTrainingKeywordPage() {
  return <StaticKeywordPage slug="tibijka-training" />;
}
