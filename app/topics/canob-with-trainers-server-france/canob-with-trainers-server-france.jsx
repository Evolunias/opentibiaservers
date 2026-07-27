import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-france');
}

export default function CanobWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-france" />;
}
