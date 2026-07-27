import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-usa');
}

export default function KasteriaWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-usa" />;
}
