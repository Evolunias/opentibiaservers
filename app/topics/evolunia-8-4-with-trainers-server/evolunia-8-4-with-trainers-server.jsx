import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-with-trainers-server');
}

export default function Evolunia84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-with-trainers-server" />;
}
