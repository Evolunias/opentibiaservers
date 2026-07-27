import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-usa');
}

export default function NepreniaWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-usa" />;
}
