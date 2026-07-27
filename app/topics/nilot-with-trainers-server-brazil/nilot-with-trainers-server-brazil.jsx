import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-brazil');
}

export default function NilotWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-brazil" />;
}
