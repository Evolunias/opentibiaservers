import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-trainers-server-mexico');
}

export default function TibiaraWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-trainers-server-mexico" />;
}
