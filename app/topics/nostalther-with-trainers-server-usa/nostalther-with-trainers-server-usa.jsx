import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-trainers-server-usa');
}

export default function NostaltherWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-trainers-server-usa" />;
}
