import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-11-with-trainers-server');
}

export default function Realera11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-11-with-trainers-server" />;
}
