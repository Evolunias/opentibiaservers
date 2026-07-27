import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-with-trainers-server');
}

export default function Realera96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-with-trainers-server" />;
}
