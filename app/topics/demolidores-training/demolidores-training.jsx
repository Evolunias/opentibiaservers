import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-training');
}

export default function DemolidoresTrainingKeywordPage() {
  return <StaticKeywordPage slug="demolidores-training" />;
}
