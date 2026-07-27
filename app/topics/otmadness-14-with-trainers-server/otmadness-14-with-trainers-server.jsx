import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-with-trainers-server');
}

export default function Otmadness14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-with-trainers-server" />;
}
