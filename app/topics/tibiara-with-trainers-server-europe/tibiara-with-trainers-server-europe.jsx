import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-trainers-server-europe');
}

export default function TibiaraWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-trainers-server-europe" />;
}
