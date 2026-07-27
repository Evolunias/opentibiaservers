import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-with-trainers-server');
}

export default function Midhem11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-with-trainers-server" />;
}
