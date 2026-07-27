import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-1-with-trainers-server');
}

export default function Tibianus71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-1-with-trainers-server" />;
}
