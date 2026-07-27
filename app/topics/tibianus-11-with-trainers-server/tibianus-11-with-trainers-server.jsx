import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-with-trainers-server');
}

export default function Tibianus11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-with-trainers-server" />;
}
