import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-uk');
}

export default function NepreniaWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-uk" />;
}
