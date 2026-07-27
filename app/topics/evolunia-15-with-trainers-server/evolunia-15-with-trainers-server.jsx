import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-with-trainers-server');
}

export default function Evolunia15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-with-trainers-server" />;
}
