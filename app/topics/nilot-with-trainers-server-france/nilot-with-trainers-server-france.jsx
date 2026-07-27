import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-france');
}

export default function NilotWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-france" />;
}
