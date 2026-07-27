import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-latin-america');
}

export default function NilotWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-latin-america" />;
}
