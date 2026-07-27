import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-with-trainers-server');
}

export default function Kasteria12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-with-trainers-server" />;
}
