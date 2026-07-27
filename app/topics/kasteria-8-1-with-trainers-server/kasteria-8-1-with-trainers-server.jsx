import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-1-with-trainers-server');
}

export default function Kasteria81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-1-with-trainers-server" />;
}
