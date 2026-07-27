import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-with-trainers-server');
}

export default function Rubinot11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-with-trainers-server" />;
}
