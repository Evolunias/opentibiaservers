import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-north-america');
}

export default function NilotWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-north-america" />;
}
