import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-with-trainers-server');
}

export default function Tibianus100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-with-trainers-server" />;
}
