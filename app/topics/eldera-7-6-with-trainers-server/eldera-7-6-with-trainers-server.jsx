import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-with-trainers-server');
}

export default function Eldera76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-with-trainers-server" />;
}
