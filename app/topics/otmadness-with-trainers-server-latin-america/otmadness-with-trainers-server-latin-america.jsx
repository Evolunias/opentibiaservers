import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-trainers-server-latin-america');
}

export default function OtmadnessWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-trainers-server-latin-america" />;
}
