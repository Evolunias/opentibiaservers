import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-trainers-server-france');
}

export default function TibiaraWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-trainers-server-france" />;
}
