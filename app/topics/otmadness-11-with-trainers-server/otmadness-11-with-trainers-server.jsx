import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-with-trainers-server');
}

export default function Otmadness11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-with-trainers-server" />;
}
