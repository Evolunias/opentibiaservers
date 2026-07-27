import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-6-with-trainers-server');
}

export default function Realera86WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-6-with-trainers-server" />;
}
