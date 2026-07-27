import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-with-trainers-server');
}

export default function Midhem12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-with-trainers-server" />;
}
