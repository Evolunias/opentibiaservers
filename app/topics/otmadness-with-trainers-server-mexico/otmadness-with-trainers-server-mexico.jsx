import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-trainers-server-mexico');
}

export default function OtmadnessWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-trainers-server-mexico" />;
}
