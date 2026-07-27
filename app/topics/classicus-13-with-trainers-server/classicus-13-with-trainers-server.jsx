import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-with-trainers-server');
}

export default function Classicus13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-with-trainers-server" />;
}
