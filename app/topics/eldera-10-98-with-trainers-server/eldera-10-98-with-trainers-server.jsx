import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-98-with-trainers-server');
}

export default function Eldera1098WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-98-with-trainers-server" />;
}
