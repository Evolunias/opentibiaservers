import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-4-with-trainers-server');
}

export default function Kasteria74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-4-with-trainers-server" />;
}
