import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-training');
}

export default function OlderaTrainingKeywordPage() {
  return <StaticKeywordPage slug="oldera-training" />;
}
