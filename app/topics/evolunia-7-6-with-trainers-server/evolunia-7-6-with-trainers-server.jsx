import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-with-trainers-server');
}

export default function Evolunia76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-with-trainers-server" />;
}
