import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-europe');
}

export default function TibiameWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-europe" />;
}
