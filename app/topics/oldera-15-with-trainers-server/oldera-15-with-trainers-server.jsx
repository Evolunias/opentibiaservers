import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-with-trainers-server');
}

export default function Oldera15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-with-trainers-server" />;
}
