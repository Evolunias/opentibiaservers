import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-13-with-trainers-server');
}

export default function Eldera13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-13-with-trainers-server" />;
}
