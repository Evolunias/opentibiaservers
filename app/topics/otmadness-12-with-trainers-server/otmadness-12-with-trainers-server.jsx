import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-with-trainers-server');
}

export default function Otmadness12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-with-trainers-server" />;
}
