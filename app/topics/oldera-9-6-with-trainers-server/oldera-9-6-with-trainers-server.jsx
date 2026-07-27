import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-with-trainers-server');
}

export default function Oldera96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-with-trainers-server" />;
}
