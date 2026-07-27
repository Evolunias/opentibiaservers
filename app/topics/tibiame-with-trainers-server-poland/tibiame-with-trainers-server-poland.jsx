import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-poland');
}

export default function TibiameWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-poland" />;
}
