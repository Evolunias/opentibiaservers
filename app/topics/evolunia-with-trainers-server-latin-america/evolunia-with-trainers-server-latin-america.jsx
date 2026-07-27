import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-trainers-server-latin-america');
}

export default function EvoluniaWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-trainers-server-latin-america" />;
}
