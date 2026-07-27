import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-canada');
}

export default function KasteriaWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-canada" />;
}
