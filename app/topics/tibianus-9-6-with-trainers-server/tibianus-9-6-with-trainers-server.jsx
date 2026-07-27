import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-with-trainers-server');
}

export default function Tibianus96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-with-trainers-server" />;
}
