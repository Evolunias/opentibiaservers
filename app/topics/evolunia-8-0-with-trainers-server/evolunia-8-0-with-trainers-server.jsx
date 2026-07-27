import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-0-with-trainers-server');
}

export default function Evolunia80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-0-with-trainers-server" />;
}
