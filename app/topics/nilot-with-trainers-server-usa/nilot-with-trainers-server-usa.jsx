import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-usa');
}

export default function NilotWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-usa" />;
}
