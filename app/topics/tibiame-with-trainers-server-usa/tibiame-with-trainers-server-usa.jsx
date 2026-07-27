import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-usa');
}

export default function TibiameWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-usa" />;
}
