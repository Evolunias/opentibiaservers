import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-argentina');
}

export default function TibiameWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-argentina" />;
}
