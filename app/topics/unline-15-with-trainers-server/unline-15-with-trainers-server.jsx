import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-with-trainers-server');
}

export default function Unline15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-with-trainers-server" />;
}
