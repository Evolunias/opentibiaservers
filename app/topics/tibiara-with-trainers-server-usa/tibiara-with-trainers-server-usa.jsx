import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-trainers-server-usa');
}

export default function TibiaraWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-trainers-server-usa" />;
}
