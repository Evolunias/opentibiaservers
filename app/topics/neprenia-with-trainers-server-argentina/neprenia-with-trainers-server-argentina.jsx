import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-argentina');
}

export default function NepreniaWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-argentina" />;
}
