import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-trainers-server-europe');
}

export default function RubinotWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-trainers-server-europe" />;
}
