import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-with-trainers-server');
}

export default function Eldera11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-with-trainers-server" />;
}
