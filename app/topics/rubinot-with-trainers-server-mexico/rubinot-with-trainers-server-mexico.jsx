import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-trainers-server-mexico');
}

export default function RubinotWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-trainers-server-mexico" />;
}
