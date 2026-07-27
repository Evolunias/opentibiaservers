import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-trainers-server-argentina');
}

export default function ThaisotWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-trainers-server-argentina" />;
}
