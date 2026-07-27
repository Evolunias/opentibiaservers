import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-with-trainers-server');
}

export default function Evolunia11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-with-trainers-server" />;
}
