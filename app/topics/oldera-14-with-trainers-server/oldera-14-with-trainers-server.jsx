import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-with-trainers-server');
}

export default function Oldera14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-with-trainers-server" />;
}
