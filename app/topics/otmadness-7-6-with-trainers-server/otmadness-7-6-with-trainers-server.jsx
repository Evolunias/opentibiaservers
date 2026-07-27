import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-with-trainers-server');
}

export default function Otmadness76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-with-trainers-server" />;
}
