import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-with-trainers-server');
}

export default function Tibijka71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-with-trainers-server" />;
}
