import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-training');
}

export default function LumineraTrainingKeywordPage() {
  return <StaticKeywordPage slug="luminera-training" />;
}
