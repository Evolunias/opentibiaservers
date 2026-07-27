import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-trainers-server-poland');
}

export default function TibiaraWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-trainers-server-poland" />;
}
