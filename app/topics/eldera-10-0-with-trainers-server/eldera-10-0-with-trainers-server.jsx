import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-with-trainers-server');
}

export default function Eldera100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-with-trainers-server" />;
}
