import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-poland');
}

export default function NepreniaWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-poland" />;
}
