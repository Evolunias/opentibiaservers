import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-training');
}

export default function AmeriaTrainingKeywordPage() {
  return <StaticKeywordPage slug="ameria-training" />;
}
