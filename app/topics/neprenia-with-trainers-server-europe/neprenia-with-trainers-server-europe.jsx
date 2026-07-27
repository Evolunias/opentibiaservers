import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-europe');
}

export default function NepreniaWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-europe" />;
}
