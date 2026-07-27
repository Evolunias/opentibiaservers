import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-with-trainers-server');
}

export default function Oldera76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-with-trainers-server" />;
}
