import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-1-with-trainers-server');
}

export default function Tibiantis81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-1-with-trainers-server" />;
}
