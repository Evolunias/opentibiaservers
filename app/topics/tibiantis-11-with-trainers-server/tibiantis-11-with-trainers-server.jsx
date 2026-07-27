import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-with-trainers-server');
}

export default function Tibiantis11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-with-trainers-server" />;
}
