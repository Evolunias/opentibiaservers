import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-mexico');
}

export default function NepreniaWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-mexico" />;
}
