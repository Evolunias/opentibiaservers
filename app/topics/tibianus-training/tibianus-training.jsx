import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-training');
}

export default function TibianusTrainingKeywordPage() {
  return <StaticKeywordPage slug="tibianus-training" />;
}
