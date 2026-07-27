import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-argentina');
}

export default function KasteriaWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-argentina" />;
}
