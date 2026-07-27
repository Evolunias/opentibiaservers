import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-trainers-server-north-america');
}

export default function TibiaraWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-trainers-server-north-america" />;
}
