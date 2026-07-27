import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-with-trainers-server');
}

export default function Realera100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-with-trainers-server" />;
}
