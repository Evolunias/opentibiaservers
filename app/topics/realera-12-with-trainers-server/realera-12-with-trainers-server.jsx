import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-with-trainers-server');
}

export default function Realera12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-with-trainers-server" />;
}
