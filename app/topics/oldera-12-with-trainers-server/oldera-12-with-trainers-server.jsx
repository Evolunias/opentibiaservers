import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-with-trainers-server');
}

export default function Oldera12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-with-trainers-server" />;
}
