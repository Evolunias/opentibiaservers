import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-trainers-server-germany');
}

export default function TibiaraWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-trainers-server-germany" />;
}
