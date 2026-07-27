import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-north-america');
}

export default function NepreniaWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-north-america" />;
}
