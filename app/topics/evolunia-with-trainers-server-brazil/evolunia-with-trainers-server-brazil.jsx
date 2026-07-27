import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-trainers-server-brazil');
}

export default function EvoluniaWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-trainers-server-brazil" />;
}
