import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-north-america');
}

export default function KasteriaWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-north-america" />;
}
