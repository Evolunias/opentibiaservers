import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-with-trainers-server');
}

export default function Evolunia13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-with-trainers-server" />;
}
