import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-with-trainers-server');
}

export default function Eldera14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-with-trainers-server" />;
}
