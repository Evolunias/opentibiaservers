import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-with-trainers-server');
}

export default function Midhem15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-with-trainers-server" />;
}
