import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-0-with-trainers-server');
}

export default function Kasteria80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-0-with-trainers-server" />;
}
