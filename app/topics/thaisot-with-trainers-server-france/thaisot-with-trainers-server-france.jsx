import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-trainers-server-france');
}

export default function ThaisotWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-trainers-server-france" />;
}
