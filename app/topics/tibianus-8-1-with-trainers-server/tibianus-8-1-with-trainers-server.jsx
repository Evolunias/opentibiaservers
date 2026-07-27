import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-1-with-trainers-server');
}

export default function Tibianus81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-1-with-trainers-server" />;
}
