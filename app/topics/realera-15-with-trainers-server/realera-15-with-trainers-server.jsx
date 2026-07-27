import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-with-trainers-server');
}

export default function Realera15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-with-trainers-server" />;
}
