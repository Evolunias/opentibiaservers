import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-4-with-trainers-server');
}

export default function Tibiantis74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-4-with-trainers-server" />;
}
