import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-north-america');
}

export default function TibiameWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-north-america" />;
}
