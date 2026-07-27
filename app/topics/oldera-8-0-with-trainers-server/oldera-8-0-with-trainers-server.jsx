import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-with-trainers-server');
}

export default function Oldera80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-with-trainers-server" />;
}
