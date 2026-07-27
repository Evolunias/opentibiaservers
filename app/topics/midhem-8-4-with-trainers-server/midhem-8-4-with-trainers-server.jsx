import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-4-with-trainers-server');
}

export default function Midhem84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-4-with-trainers-server" />;
}
