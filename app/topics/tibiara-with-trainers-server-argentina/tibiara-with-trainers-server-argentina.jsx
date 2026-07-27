import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-trainers-server-argentina');
}

export default function TibiaraWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-trainers-server-argentina" />;
}
