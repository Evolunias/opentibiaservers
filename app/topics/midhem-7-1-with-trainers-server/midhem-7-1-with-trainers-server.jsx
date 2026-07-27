import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-1-with-trainers-server');
}

export default function Midhem71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-1-with-trainers-server" />;
}
