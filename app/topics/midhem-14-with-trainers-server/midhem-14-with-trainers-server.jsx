import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-with-trainers-server');
}

export default function Midhem14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-with-trainers-server" />;
}
