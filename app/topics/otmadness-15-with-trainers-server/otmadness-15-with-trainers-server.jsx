import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-with-trainers-server');
}

export default function Otmadness15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-with-trainers-server" />;
}
