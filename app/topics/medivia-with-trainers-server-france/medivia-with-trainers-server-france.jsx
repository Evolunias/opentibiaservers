import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-trainers-server-france');
}

export default function MediviaWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-trainers-server-france" />;
}
