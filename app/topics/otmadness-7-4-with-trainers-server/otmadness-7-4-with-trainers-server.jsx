import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-4-with-trainers-server');
}

export default function Otmadness74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-4-with-trainers-server" />;
}
