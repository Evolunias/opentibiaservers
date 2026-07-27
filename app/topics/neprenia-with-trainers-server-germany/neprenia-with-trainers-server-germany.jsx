import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-germany');
}

export default function NepreniaWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-germany" />;
}
