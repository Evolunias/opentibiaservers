import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-with-trainers-server');
}

export default function Oldera11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-with-trainers-server" />;
}
