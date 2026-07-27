import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-trainers-server-argentina');
}

export default function EvoluniaWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-trainers-server-argentina" />;
}
