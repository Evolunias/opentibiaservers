import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-with-trainers-server');
}

export default function Tibiantis76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-with-trainers-server" />;
}
