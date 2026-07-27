import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-brazil');
}

export default function NepreniaWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-brazil" />;
}
