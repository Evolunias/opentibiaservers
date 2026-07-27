import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-with-trainers-server');
}

export default function Midhem76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-with-trainers-server" />;
}
