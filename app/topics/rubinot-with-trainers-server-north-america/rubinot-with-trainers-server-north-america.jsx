import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-trainers-server-north-america');
}

export default function RubinotWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-trainers-server-north-america" />;
}
