import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-trainers-server-uk');
}

export default function NostaltherWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-trainers-server-uk" />;
}
