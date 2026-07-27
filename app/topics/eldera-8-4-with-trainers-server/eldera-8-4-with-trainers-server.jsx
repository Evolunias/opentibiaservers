import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-4-with-trainers-server');
}

export default function Eldera84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-4-with-trainers-server" />;
}
