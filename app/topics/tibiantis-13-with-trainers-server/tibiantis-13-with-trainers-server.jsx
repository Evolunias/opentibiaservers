import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-with-trainers-server');
}

export default function Tibiantis13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-with-trainers-server" />;
}
