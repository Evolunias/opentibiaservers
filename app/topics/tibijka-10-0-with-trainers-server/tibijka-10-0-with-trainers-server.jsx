import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-with-trainers-server');
}

export default function Tibijka100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-with-trainers-server" />;
}
