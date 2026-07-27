import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-trainers-server-south-america');
}

export default function TibiaraWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-trainers-server-south-america" />;
}
