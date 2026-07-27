import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-training');
}

export default function VenoreotTrainingKeywordPage() {
  return <StaticKeywordPage slug="venoreot-training" />;
}
