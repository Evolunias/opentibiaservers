import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-brazil');
}

export default function TibiameWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-brazil" />;
}
