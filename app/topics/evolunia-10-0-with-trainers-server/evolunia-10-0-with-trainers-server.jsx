import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-with-trainers-server');
}

export default function Evolunia100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-with-trainers-server" />;
}
