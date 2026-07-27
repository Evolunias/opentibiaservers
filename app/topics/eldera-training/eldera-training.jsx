import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-training');
}

export default function ElderaTrainingKeywordPage() {
  return <StaticKeywordPage slug="eldera-training" />;
}
