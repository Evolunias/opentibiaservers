import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-1-with-trainers-server');
}

export default function Otmadness81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-1-with-trainers-server" />;
}
