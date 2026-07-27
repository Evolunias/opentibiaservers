import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-mexico');
}

export default function NilotWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-mexico" />;
}
