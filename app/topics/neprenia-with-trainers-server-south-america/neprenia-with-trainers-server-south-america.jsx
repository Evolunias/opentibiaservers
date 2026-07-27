import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-south-america');
}

export default function NepreniaWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-south-america" />;
}
