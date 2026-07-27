import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-with-trainers-server');
}

export default function Realera71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-with-trainers-server" />;
}
