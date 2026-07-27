import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-trainers-server-uk');
}

export default function OtmadnessWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-trainers-server-uk" />;
}
