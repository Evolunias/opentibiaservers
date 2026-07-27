import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-canada');
}

export default function NilotWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-canada" />;
}
