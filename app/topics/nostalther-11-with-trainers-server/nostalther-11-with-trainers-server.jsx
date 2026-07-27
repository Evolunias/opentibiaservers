import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-with-trainers-server');
}

export default function Nostalther11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-with-trainers-server" />;
}
