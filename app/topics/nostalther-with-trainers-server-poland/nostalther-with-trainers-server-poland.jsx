import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-trainers-server-poland');
}

export default function NostaltherWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-trainers-server-poland" />;
}
