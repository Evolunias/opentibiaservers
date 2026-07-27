import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-with-trainers-server');
}

export default function Nostalther12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-with-trainers-server" />;
}
