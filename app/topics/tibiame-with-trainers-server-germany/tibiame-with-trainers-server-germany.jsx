import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-germany');
}

export default function TibiameWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-germany" />;
}
