import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-trainers-server-canada');
}

export default function TibiaraWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-trainers-server-canada" />;
}
