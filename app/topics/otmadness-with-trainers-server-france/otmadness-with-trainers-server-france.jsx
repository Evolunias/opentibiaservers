import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-trainers-server-france');
}

export default function OtmadnessWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-trainers-server-france" />;
}
