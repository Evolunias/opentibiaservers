import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-with-trainers-server');
}

export default function Midhem96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-with-trainers-server" />;
}
