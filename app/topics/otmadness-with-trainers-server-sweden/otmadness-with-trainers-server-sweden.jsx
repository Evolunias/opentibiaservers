import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-trainers-server-sweden');
}

export default function OtmadnessWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-trainers-server-sweden" />;
}
