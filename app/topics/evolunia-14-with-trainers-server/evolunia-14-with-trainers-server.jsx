import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-with-trainers-server');
}

export default function Evolunia14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-with-trainers-server" />;
}
