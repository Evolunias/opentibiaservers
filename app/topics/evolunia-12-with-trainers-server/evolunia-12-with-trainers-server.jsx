import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-with-trainers-server');
}

export default function Evolunia12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-with-trainers-server" />;
}
