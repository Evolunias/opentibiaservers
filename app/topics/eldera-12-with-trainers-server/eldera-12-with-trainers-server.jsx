import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-with-trainers-server');
}

export default function Eldera12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-with-trainers-server" />;
}
