import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-with-trainers-server');
}

export default function Eldera15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-with-trainers-server" />;
}
