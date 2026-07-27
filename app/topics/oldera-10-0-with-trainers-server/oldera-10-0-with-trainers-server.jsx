import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-with-trainers-server');
}

export default function Oldera100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-with-trainers-server" />;
}
